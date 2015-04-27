package com.szogibalu.untitled.usermanagement.resource

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.cloud.security.oauth2.resource.EnableOAuth2Resource
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

import static java.util.UUID.randomUUID

@SpringBootApplication
@RestController
@EnableOAuth2Resource
class UserManagementResourceServiceApplication {

    @RequestMapping('/')
    def home() {
        [id: randomUUID().toString(), message: 'Hello World']
    }

    static void main(String[] args) {
        SpringApplication.run UserManagementResourceServiceApplication, args
    }
}
