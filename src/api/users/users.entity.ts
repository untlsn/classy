import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

const Role = {
  student: 'STUDENT',
  teacher: 'TEACHER',
};

@Entity()
export class User {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.student,
  })
    role: keyof typeof Role;

  @Column()
    firstName: string;

  @Column()
    lastName: string;

  @Column({ type: 'date' })
    birth: Date;

  @Relation()
    student;
}

// model User {
//   id        Int       @default(autoincrement()) @id
//   role      Role      @default(STUDENT)
//   firstName String
//   lastName  String
//   birth     DateTime  @db.Date
//
//   student   Student?
//   teacher   Teacher?
// }
