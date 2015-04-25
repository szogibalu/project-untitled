package com.szogibalu.untitled.usermanagement.client.controller;

import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.Map;

import static java.util.Collections.singletonMap;

@RestController
@EnableRedisHttpSession
public class SecurityController {

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }

    @RequestMapping("/token")
    @ResponseBody
    public Map<String, String> token(HttpSession session) {
        return singletonMap("token", session.getId());
    }
}
