package com.szogibalu.untitled.usermanagement.resource.filter

import org.springframework.core.Ordered
import org.springframework.core.annotation.Order
import org.springframework.stereotype.Component

import javax.servlet.*
import javax.servlet.http.HttpServletResponse

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
class CorsFilter implements Filter {

    void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {
        HttpServletResponse httpServletResponse = (HttpServletResponse) response
        httpServletResponse.setHeader("Access-Control-Allow-Origin", "*")
        httpServletResponse.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE")
        httpServletResponse.setHeader("Access-Control-Allow-Headers", "x-auth-token, x-requested-with")
        httpServletResponse.setHeader("Access-Control-Max-Age", "3600")

        if (request.getMethod() != 'OPTIONS') {
            chain.doFilter(request, httpServletResponse)
        }
    }

    void init(FilterConfig filterConfig) {}

    void destroy() {}
}
