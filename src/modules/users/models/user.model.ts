import { Column, Model, Table } from 'sequelize-typescript';
@Table
export class User extends Model {
  @Column
  firstName: string;
  @Column
  lastName: string;
  @Column
  password: string;
  @Column
  email: string;
  @Column
  age: number;
  @Column
  gender: string;
  @Column
  problems: boolean;
}
