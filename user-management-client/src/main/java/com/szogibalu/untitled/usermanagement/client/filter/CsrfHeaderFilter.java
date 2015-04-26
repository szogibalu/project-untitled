package com.szogibalu.untitled.usermanagement.client.filter;

import org.apache.commons.lang3.StringUtils;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static org.springframework.web.util.WebUtils.getCookie;

public class CsrfHeaderFilter extends OncePerRequestFilter {

    public static final String TOKEN_NAME = "XSRF-TOKEN";

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        CsrfToken csrf = (CsrfToken) request.getAttribute(CsrfToken.class.getName());
        if (csrf != null) {
            Cookie cookie = getCookie(request, TOKEN_NAME);
            String token = csrf.getToken();
            if (cookie == null || !StringUtils.equals(token, cookie.getValue())) {
                response.addCookie(getCookieWithToken(token));
            }
        }
        filterChain.doFilter(request, response);
    }

    private Cookie getCookieWithToken(String token) {
        Cookie cookie = new Cookie(TOKEN_NAME, token);
        cookie.setPath("/");
        return cookie;
    }
}
