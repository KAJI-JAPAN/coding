class Provisoining_task < ApplicationRecord
  belong_to :employee

  scope :runnable, -> {
    where(status: [:pending, :failed])
      .where('next_run_at <= ?', Time.current)
  }
end