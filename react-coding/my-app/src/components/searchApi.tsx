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
		const timer = setTimeout(() => setDebounced(value),  delayMs )
		return () => clearTimeout(timer);
	}, [value, delayMs]);

	return debounced;
}

type Status = "idle" | "loading" | "success" | "error";
export const SearchApi = () => {
	const [query, setQuery] = useState("");
	const bounce =  useDeboucedValue(query, 4000)
	const [result, setResult] = useState<string[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [state, setState] = useState<Status>("idle");


	useEffect(() => {
		const q = bounce.trim()

		if(!q) {
			setState("idle");
			setResult([])
			setError(null)
			return;
		}


		setState("loading");
		sample(q).then((q) => {
			setState("success");
			setResult(q);
		}).catch((e) => {
			setState("error");
			setError(e instanceof Error ? e.message : "Error");
		})
	}, [bounce]);



	return (
		<>
			<input
				type="search"
				value={query}
				onChange={(e) => {
					setQuery(e.target.value)
				}}
			/>
			{state === "idle" && <div>検索ワードを入力してください。</div>}
			{state === "loading" && <div>検索中...</div>}
			{state === "error" && <div role="alert">エラー: {error}</div>}
			{state === "success" && result?.length === 0 && <div>結果がありません。</div>}

			{state === "success" && result.length > 0 && (
				<ul>
					{result?.map((x) => (
						<li key={x}>{x}</li>
					))}
				</ul>
			)
			}
		</>
	)
}