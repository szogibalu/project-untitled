package com.szogibalu.untitled.usermanagement.client.filter;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.security.web.csrf.CsrfToken;

import javax.servlet.FilterChain;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static org.apache.commons.lang3.RandomStringUtils.randomAlphabetic;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class CsrfHeaderFilterTest {

    CsrfHeaderFilter target;

    @Mock
    HttpServletRequest request;

    @Mock
    HttpServletResponse response;

    @Mock
    FilterChain filterChain;

    @Mock
    CsrfToken csrfToken;

    @Before
    public void setUp() throws Exception {
        target = new CsrfHeaderFilter();
    }

    @Test
    public void testDoFilterInternal() throws Exception {
        when(request.getAttribute(CsrfToken.class.getName())).thenReturn(csrfToken);
        when(csrfToken.getToken()).thenReturn(randomAlphabetic(10));
        when(request.getCookies()).thenReturn(new Cookie[]{new Cookie("XSRF-TOKEN", randomAlphabetic(10))});

        target.doFilterInternal(request, response, filterChain);

        verify(response, times(1)).addCookie(Mockito.<Cookie>any());
        verify(filterChain, times(1)).doFilter(request, response);
    }
}