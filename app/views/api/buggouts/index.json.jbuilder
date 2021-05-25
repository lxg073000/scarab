@buggouts.each do |buggout|
  json.set! buggout.id do
     json.extract! buggout, :id, :user_id, :title, :description, :date_completed, :start_time, :end_time
end
end