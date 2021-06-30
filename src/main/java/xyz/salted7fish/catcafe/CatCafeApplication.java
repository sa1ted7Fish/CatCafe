package xyz.salted7fish.catcafe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication()
public class CatCafeApplication {

    public static void main(String[] args) {
        SpringApplication.run(CatCafeApplication.class, args);
    }

}
