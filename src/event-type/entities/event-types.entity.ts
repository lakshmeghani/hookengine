import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EventType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ type: 'text'})
  description: string;

  @Column({ 
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;
}
