import { Field, ID, ObjectType } from "@nestjs/graphql";

import { type User } from "@/prisma/generated";

@ObjectType()
export class UserModel implements User {
  @Field(() => ID)
  public id: string;

  @Field(() => String)
  public email: string;

  @Field(() => String)
  public password: string;

  @Field(() => String)
  public username: string;

  @Field(() => Boolean)
  public isDeactivated: boolean;

  @Field(() => Date, { nullable: true })
  public deactivatedAt: Date;

  @Field(() => Date)
  public createdAt: Date;

  @Field(() => Date)
  public updatedAt: Date;
}
