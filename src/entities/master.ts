import { IsActive } from 'service/is-active';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export class Master {
  @Column({
    name: 'slug',
    unique: true,
    nullable: false,
  })
  slug: string;
  @Column({
    name: 'is_active',
  })
  isActive: IsActive;
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    select: false,
  })
  createdAt: Date;
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    select: false,
  })
  updatedAt: Date;
}
