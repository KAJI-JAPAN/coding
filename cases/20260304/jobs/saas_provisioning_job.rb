class SassProvisioingJob < ApplicationJob
  queue_as :default

  # updateは全て例外を出す!が使われているが問題はないか？基準は？
  def perform(task_id)
    # 既に登録済みの場合は何もしない
    task = provisioning_task(task_id)
    return unless task.status.in?(%w[pending failed])
    
    begin
      # 処理中にステータスを変更
      # !でDBが更新できない場合は例外を出してDBの状態と外部連携先の状態を合わせry
      task.update!(status: :processing)
      
      # 実際のAPI連携 → 外部サービスの切り出し
      execute_provisionig(task)
      
      task.update(status: :success, error_message: nil)
      
      reucue => e
        handle_rettry(task, e)
    end
  end
  
  private
  
  def execute_provisionig(task)
  #   外部連携の処理をここで記載
    case task
    when "Slack" then
    #   Slackの処理
    when "Google" then
    #   Googleの処理
    else
      raise "Unknown provider #{task.provider}"
    end
  end

  def handle_rettry(task, error)
    new_retry_count = task.retry_count + 1

    if new_retry_count > 5
      task.update!(status: :manual, error_message: error.message)
    else
      wait_time = (2**new_retry_count).minutes

      task.update!(
        status: :failed,
        retry_count: new_retry_count,
        error_message: error.message,
        next_run_at: Time.current + wait_time
      )

      # このメソッドは何？
      SassProvisioingJob.set(wait: wait_time).perform_later(task.id)
    end
  end
end
