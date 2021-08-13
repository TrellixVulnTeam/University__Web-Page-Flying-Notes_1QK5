package com.DB;

import javax.persistence.*;

@Entity
public class User {

    public enum Types {
        TEACHER,
        STUDENT,
        PARENT
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private long id;
    @Basic(optional = false)
    @Column(nullable = false)
    private final String firstName;
    @Basic(optional = false)
    @Column(nullable = false)
    private final String lastName;
    @Basic(optional = false)
    @Column(nullable = false)
    private final String email;
    @Basic(optional = false)
    @Column(nullable = false)
    private final String password;
    @Basic(optional = false)
    @Column(nullable = false)
    private final Types accountType;

    public User(String firstName, String lastName, String email, String password, Types accountType) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.accountType = accountType;
    }

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", name=" + firstName + lastName + ", email=" + email + '}';
    }

    public boolean checkPassword(String password) {
        return (this.getPassword().equals(password));
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public Types getAccountType() {
        return accountType;
    }

}