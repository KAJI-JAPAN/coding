// 	•	userId を受け取り、ユーザー詳細を取得して表示する
// 	•	userId は短時間で何度も変わり得る
// 	•	ローディング / エラー / 空状態を表現する
// 	•	画面が破棄された後に state 更新して警告が出ないようにする

import { useEffect, useState } from "react";

type User = { id: string; name: string };

async function fetchUser(userId: string): Promise<User> {
    const ms = 200 + Math.floor(Math.random() * 800);
    await new Promise((r) => setTimeout(r, ms));
    if (Math.random() < 0.15) throw new Error("Network error");
    return { id: userId, name: `User-${userId}` };
}

export function UserPanel({ userId }: { userId: string }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        if (!userId) {
            setUser(null);
            setLoading(false);
            setError(null);
            return;
        };

        setLoading(true);
        setError(null);

        (async (): Promise<void>  => {
        try {
            const u = await fetchUser(userId);
            if (cancelled) return;
            setUser(u);
        } catch(e: unknown) {
            if (cancelled) return;
            setError(e instanceof Error ? e.message : "Unknown error");
        } finally {
            if(cancelled) return;
            setLoading(false);
        }
        })()

        return () =>{
            cancelled = true;
        }
    }, [userId]);

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!user) return <div>ユーザーが存在しません</div>

    return (
        <div>
            <li>{user.id}</li>
            <li>{user.name}</li>
        </div>
    )
}

export function Demo() {
    const [userId, setUserId] = useState("1");
    return (
        <div>
            <button onClick={() => setUserId("1")}>1</button>
            <button onClick={() => setUserId("2")}>2</button>
            <button onClick={() => setUserId("3")}>3</button>
            <UserPanel userId={userId} />
        </div>
    );
}