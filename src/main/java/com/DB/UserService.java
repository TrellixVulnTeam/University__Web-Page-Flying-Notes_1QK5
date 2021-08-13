package com.DB;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void save(User user) {
        userRepository.save(user);
    }

    public User findOneByEmail(String email){
        List<User> list = userRepository.findByEmail(email);
        if(!list.isEmpty()){
            return list.get(0);
        }
        return null;
    }
}
