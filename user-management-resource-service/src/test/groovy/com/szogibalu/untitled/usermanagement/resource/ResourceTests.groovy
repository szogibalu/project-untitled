package com.szogibalu.untitled.usermanagement.resource

import org.junit.Assert
import org.junit.Test
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken

import java.security.Principal

import static org.junit.Assert.assertEquals

public class ResourceTests {
	
	private UserManagementResourceServiceApplication resource = new UserManagementResourceServiceApplication()

	@Test
	void home() {
		assertEquals('Hello World', resource.home().content)
	}

	@Test
	void changes() {
		Principal user = new UsernamePasswordAuthenticationToken("admin", "")
		resource.update([content: 'Foo'], user)
		Assert.assertEquals(1, resource.changes().size())
	}

	@Test
	void changesOverflow() {
		for (i in 1..11) { resource.changes << [] } 
		Principal user = new UsernamePasswordAuthenticationToken("admin", "")
		resource.update([content: 'Foo'], user)
		Assert.assertEquals(10, resource.changes().size())
	}

}
