// •	onRun(): Promise<void> を受け取るボタン
// 	•	実行中は二重実行できない
// 	•	失敗時はエラー表示し、再度実行できる
// 	•	成功時はエラーが消える

// 状態
// その状態の時に何をするか

import React, {useCallback, useRef, useState} from "react";


export function AsyncActionButton({
	                                  onRun,
	                                  label,
                                  }: {
	onRun: () => Promise<void>;
	label: string;
}) {
	const runningRef = useRef<boolean>(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleClick = useCallback(async () =>{

		if(runningRef.current) return
		runningRef.current = true;
		setLoading(true);
		setError(null);
		try {
			await onRun();
		} catch (error) {
			setError(error instanceof Error ? error.message : null);
		} finally {
			setLoading(false);
			runningRef.current = false
		}

	},[onRun])

	// 実装
	return (
		<>
			<button onClick={handleClick} disabled={loading}>
				{loading ? "送信中" : label}
			</button>
			{error && <p role="alert">{error}</p>}
		</>
	)

}