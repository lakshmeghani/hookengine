import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AccountStatus } from "../enums/account-status";
import { Subscriptions } from "../../subscriptions/entities/subscriptions.entity";
import { WebhookEvent } from "../../events/entities/events.entity";

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  companyName: string;

  @Column()
  email: string;

  @Column({ 
    type: 'enum',
    enum: AccountStatus,
    default: AccountStatus.ACTIVE
  })
  status: AccountStatus;

  @Column()
  accessKey: string;

  @OneToMany(() => Subscriptions, (subscription) => subscription.account)
  subscriptions: Subscriptions

  @OneToMany(() => WebhookEvent, (webhook) => webhook.account)
  webhookEvent: WebhookEvent

  @Column({ 
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;
}
