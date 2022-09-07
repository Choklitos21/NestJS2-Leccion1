import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import {
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength
} from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(50)
    full_name: string;

}
