package com.szogibalu.untitled.usermanagement.resource

import org.junit.AfterClass
import org.junit.BeforeClass
import org.junit.Ignore
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.boot.test.SpringApplicationConfiguration
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner
import org.springframework.test.context.web.WebAppConfiguration
import redis.embedded.RedisServer

@RunWith(SpringJUnit4ClassRunner)
@SpringApplicationConfiguration(classes = UserManagementResourceServiceApplication)
@WebAppConfiguration
class UserManagementResourceServiceApplicationTests {

    private static RedisServer redisServer;

    @BeforeClass
    public static void setup() throws Exception {
        redisServer = new RedisServer(6379);
        redisServer.start();
    }

    @AfterClass
    public static void tearDown() throws Exception {
        try {
            redisServer.stop();
        } finally {
            redisServer = null;
        }
    }


    @Test
    @Ignore("Setup Redis at runtime")
    void contextLoads() {
    }

}
