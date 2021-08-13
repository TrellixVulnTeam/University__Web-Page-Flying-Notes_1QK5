package com.myWebApp;

import com.DB.User;
import com.DB.UserRepository;
import com.DB.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin("http://localhost:80")
public class AccountController {

    private final UserService userService = new UserService();

    @RequestMapping({"/hello", "/index"})
    public ModelAndView hello() {
        ModelAndView mvc = new ModelAndView("index");
        mvc.addObject("name", "Miki");
        return mvc;
    }

    @RequestMapping({"/test"})
    public @ResponseBody String[] test() {
        return new String[] {"One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"};
    }

    // firstName, lastName, email, password, type
    @PostMapping({"/register"})
    public @ResponseBody String register(@RequestBody Map<String, String> accountDetail) {
        String firstName = accountDetail.get("firstName");
        String lastName = accountDetail.get("lastName");
        String email = accountDetail.get("email");
        String password = accountDetail.get("password");
        String stringType = accountDetail.get("type");
        User.Types type = (stringType.equals("teacher")) ? User.Types.TEACHER :
                (stringType.equals("student")) ? User.Types.STUDENT :
                        (stringType.equals("parent")) ? User.Types.PARENT : null;
        if(firstName != null && lastName != null && email != null && password != null && type != null){
            userService.save(new User(firstName, lastName, email, password, type));
            return "Success";
        }
        return "Failed";
    }

    @PostMapping({"/login"})
    public @ResponseBody String login(@RequestBody Map<String, String> accountDetail) {
        String email = accountDetail.get("email");
        String password = accountDetail.get("password");

        User user = userService.findOneByEmail(email);
        if (user != null && user.checkPassword(password)){
            return "Success";
        } else {
            return "Failed";
        }
    }
}