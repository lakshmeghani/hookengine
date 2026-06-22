import { Account } from "../../accounts/entities/accounts.entity";
import { EventTypes } from "../../event-type/entities/event-types.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Subscriptions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  targetUrl: string;

  @ManyToOne(() => Account, (account) => account.subscriptions)
  account: Account

  @ManyToMany(() => EventTypes)
  @JoinTable()
  eventTypesIds: EventTypes[]

  @Column()
  hmacSecretKey: string;

  @Column({ 
    type: 'boolean',
    default: true,
  })
  isActive: boolean
}
