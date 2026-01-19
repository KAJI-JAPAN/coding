// 	•	userId を受け取り、ユーザー詳細を取得して表示する
// 	•	userId は短時間で何度も変わり得る
// 	•	ローディング / エラー / 空状態を表現する
// 	•	画面が破棄された後に state 更新して警告が出ないようにする

import React, { useEffect, useState } from "react";

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
        let cancelled = true;

        if (!userId) {
            setUser(null);
            setLoading(null);
            setError(null);
            return;
        };

        setLoading(true);

        fetchUser(userId).then((u) =>{
            if (cancelled) return;
            setUser(u);
            setLoading(false);
        }).catch((e) => {
            if (cancelled) return;
            setError(e);
            setLoading(false);
        })
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