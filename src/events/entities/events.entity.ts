import { Account } from "src/accounts/entities/accounts.entity";
import { EventTypes } from "src/event-type/entities/event-types.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WebhookEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, (account) => account.webhookEvent)
  account: Account

  @ManyToOne(() => EventTypes)
  eventType: EventTypes

  @Column({ type: 'json' })
  rawPayload: JSON

  @Column({ 
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;
}
