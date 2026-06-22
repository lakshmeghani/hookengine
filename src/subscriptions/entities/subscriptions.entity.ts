import { Account } from "../../accounts/entities/accounts.entity";
import { EventType } from "../../event-type/entities/event-types.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  targetUrl: string;

  @ManyToOne(() => Account, (account) => account.subscriptions)
  account: Account

  @ManyToMany(() => EventType)
  @JoinTable()
  eventTypeIds: EventType[]

  @Column()
  hmacSecretKey: string;

  @Column({ 
    type: 'boolean',
    default: true,
  })
  isActive: boolean
}
