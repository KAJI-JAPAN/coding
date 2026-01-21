// 要件
// 	•	入力 query に応じて検索結果を表示
// 	•	検索APIは重い想定：入力のたびに叩かない
// 	•	ローディング / エラー / 空状態を表現
// 	•	query が変わり続けるケースを想定する
import {useEffect, useState} from "react";

async function sample(query: string): Promise<string[]> {
	const ms = 300 + Math.floor(Math.random() * 700);
	await new Promise((r) => setTimeout(r, ms));
	if (Math.random() < 0.1) throw new Error("Search failed");
	if (!query.trim()) return [];
	return Array.from({ length: 5 }, (_, i) => `${query}-${i + 1}`);
}

function useDeboucedValue(value: string, delayMs: number) {
	const [debounced, setDebounced] = useState(value);
	useEffect(() => {
		const timer = setTimeout(() => { setDebounced(value),  delayMs })
		return () => clearTimeout(timer);
	}, [value, delayMs]);

	return debounced;
}

export const searchApi = () => {
	// 実装
	return <div />;
}