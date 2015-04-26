package com.szogibalu.untitled.usermanagement.client;

import com.szogibalu.untitled.usermanagement.client.config.SecurityConfiguration;
import com.szogibalu.untitled.usermanagement.client.config.TokenStoreConfiguration;
import com.szogibalu.untitled.usermanagement.client.controller.SecurityController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(value = {
        SecurityConfiguration.class,
        TokenStoreConfiguration.class
})
public class UserManagementClientApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserManagementClientApplication.class, args);
    }
}
