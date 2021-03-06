class CreateChannelMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_memberships do |t|
      t.timestamps
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
    end

    add_index :channel_memberships, :user_id
    add_index :channel_memberships, :channel_id
  end
end
