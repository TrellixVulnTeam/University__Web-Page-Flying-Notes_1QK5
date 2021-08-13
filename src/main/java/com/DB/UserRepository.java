package com.DB;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    //@Query("select u from User u where u.emailAddress = ?1")
    //@Query(value = "SELECT * FROM USERS WHERE EMAIL_ADDRESS = ?1", nativeQuery = true)

    public List<User> findByEmail(String emailAddress);

    public List<User> findByFirstnameAndLastname(String firstName, String lastName);


}
