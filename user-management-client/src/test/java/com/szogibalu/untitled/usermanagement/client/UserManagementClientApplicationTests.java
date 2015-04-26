package com.szogibalu.untitled.usermanagement.client;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import redis.embedded.RedisServer;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = UserManagementClientApplication.class)
@WebAppConfiguration
public class UserManagementClientApplicationTests {

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
    public void contextLoads() {
    }
}
