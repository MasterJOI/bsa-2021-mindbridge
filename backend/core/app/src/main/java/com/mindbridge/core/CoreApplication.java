package com.mindbridge.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import springfox.documentation.PathProvider;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.paths.DefaultPathProvider;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.concurrent.Executor;

@SpringBootApplication
@EnableCaching
@EnableAsync
@ComponentScan("com.mindbridge")
@EntityScan("com.mindbridge.data")
@EnableJpaRepositories("com.mindbridge.data")
@EnableSwagger2
public class CoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(CoreApplication.class, args);
	}

	@Bean
	public Executor taskExecutor() {
		ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
		executor.setCorePoolSize(20);
		executor.setMaxPoolSize(100);
		executor.initialize();
		return executor;
	}

	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2).pathProvider(new DefaultPathProvider() {
			@Override
			public String getOperationPath(String operationPath) {
				return "/api";
			}
		}).select().apis(RequestHandlerSelectors.any()).paths(PathSelectors.any()).build();
	}

}
