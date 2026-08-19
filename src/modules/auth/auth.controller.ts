import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '用户注册' })
  @ApiBody({ type: CreateUserDto })
  @Post('signup')
  signUp(@Body() createUser: CreateUserDto) {
    return this.authService.signUp(createUser);
  }

  @ApiOperation({ summary: '用户登录' })
  @ApiBody({ type: SignInDto })
  @Post('signin')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }
}
