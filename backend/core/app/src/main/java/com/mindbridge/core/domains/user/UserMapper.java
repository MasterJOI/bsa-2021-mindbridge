package com.mindbridge.core.domains.user;

import com.mindbridge.core.domains.user.dto.UserProfileDto;
import com.mindbridge.data.domains.user.model.User;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {

	UserMapper MAPPER = Mappers.getMapper(UserMapper.class);

	@Mapping(target = "postsQuantity", ignore = true)
	@Mapping(target = "followersQuantity", ignore = true)
	@Mapping(target = "rating", ignore = true)
	@Mapping(target = "datesOfPosts", ignore = true)
	public abstract UserProfileDto userToUserProfileDto(User user);

}
