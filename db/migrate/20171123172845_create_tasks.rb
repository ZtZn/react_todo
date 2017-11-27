class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false, index: true
      t.boolean :done, default: false
      t.timestamps
    end
  end
end
