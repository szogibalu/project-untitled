package com.szogibalu.untitled.usermanagement.resource

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession
import org.springframework.session.web.http.HeaderHttpSessionStrategy
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

import static java.util.UUID.randomUUID

@SpringBootApplication
@RestController
@EnableRedisHttpSession
class UserManagementResourceServiceApplication extends WebSecurityConfigurerAdapter {

    @RequestMapping('/')
    def home() {
        [id: randomUUID().toString(), message: 'Hello World']
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic().disable()
        http.authorizeRequests().anyRequest().authenticated()
    }

    static void main(String[] args) {
        SpringApplication.run UserManagementResourceServiceApplication, args
    }
}
