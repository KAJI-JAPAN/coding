/*
* 演習：リソース・ステータスの一括更新プログラム（$O(N + M)$）
* 【問題設定】
*     現在システムで管理している「リソースの現在状態（Current States）」のリストがあります。
*     ここに、外部システムから届いた「更新リクエスト（Update Requests）」を一括で適用し、
*     最新の状態を反映したリストを作成してください。
* 【要件】
*     1. 効率性: リソース数 $N$、更新リクエスト数 $M$ に対して、計算量 $O(N + M)$ で実装してください。
*     2. ビジネスロジック: * 更新リクエストに存在するリソースは、新しい status で上書きしてください。
*     3. 更新リクエストに存在しないリソースは、元の状態を維持してください。更新リクエストの中に、現在のリストに存在しない新しい resourceId がある場合は、新規リソースとして追加してください。
*     4. 安全性: 元の配列（currentStates）を直接変更せず、新しい配列を返してください（イミュータビリティの確保）。
* */


//　入力例
type ResourceStatus = "active" | "inactive" | "archived";

interface ResourceState {
	resourceId: string;
	status: ResourceStatus;
	lastUpdated: number;
}

interface StatusUpdate {
	resourceId: string;
	newStatus: ResourceStatus;
}

const currentStates: ResourceState[] = [
	{ resourceId: "res-01", status: "active", lastUpdated: 1700000000 },
	{ resourceId: "res-02", status: "inactive", lastUpdated: 1700000000 },
];

const updates: StatusUpdate[] = [
	{ resourceId: "res-02", newStatus: "active" },   // 既存の更新
	{ resourceId: "res-03", newStatus: "archived" }, // 新規追加
];

//　期待される結果
[
	{ resourceId: "res-01", status: "active", lastUpdated: 1700000000 },
	{ resourceId: "res-02", status: "active", lastUpdated: 1707500000 }, // statusが更新されている
	{ resourceId: "res-03", status: "archived", lastUpdated: 1707500000 } // 新規追加されている
]

// --------------------------------------------------------------------------------------------

/**
 * 【問題を確認】
 *  1. currentStates(現在のリソース)をupdates(更新リクスト)で更新をする
 *  2. 更新時は一括で更新をする
 *  3. 最新の状態を反映するので、タイムスタンプも更新する
 *
 * 【要件】
 *  1. 一括更新
 *  2. 更新時はstatusも上書き
 *  3. 更新時に現在のリソースがない場合は追加
 *  4. 更新のリクエストがない場合は現在のリソースを保持する
 *  5. 元の現在のリソースは直接変更しない
 *
 * 【方針確認 / 要件すり合わせ】
 *  1. 更新日付は現在の日付でいいですか？
 *  2. 更新方法はメソッドを呼び出して更新で良いですか？
 *  3. 引数は現在の値と更新用の値で良いですか？
 *  4. 一括的用途は何を指しますか？Transactionでしょうか？
 *
 *  1. 返り値は何を返しますか？
 *
 */

const updateResourceStatus = (currentStatus: ResourceState[], updateStatus: StatusUpdate[]): ResourceState[] => {
	// ガード
	if(!currentStatus || currentStatus.length === 0 ) return [];

	// 更新のリクエストがない場合は現在のリソースを保持する
	if(!updateStatus || updateStatus.length === 0) return [...currentStatus];

	// 更新用
	// IDで高速に検索したいのでupdateのidをキーにして、アップデートの内容を取得するようにする
	const updateMap = new Map<string, StatusUpdate>(
		updateStatus.map(u => [u.resourceId, u])
	);

	// 新規追記時にメモ用として機能させる
	const processIds = new Set<string>();

	const updateResource = currentStatus.map(resource => {
		const update = updateMap.get(resource.resourceId);
		if(update) {
			processIds.add(update.resourceId);
			return {
				...resource,
				status: update.newStatus,
				lastUpdated: Date.now(),
			}
		}
		return {...resource}
	})

	// 既存のリソースの中に更新用がなければ追加
	const newResources = updateStatus
		.filter(u => !processIds.has(u.resourceId))
		.map( u =>  ({
			resourceId: u.resourceId,
			status: u.newStatus,
			lastUpdated: Date.now()
		}))

	//  既存 + 新規　の値を返す
	return [...newResources, ...updateResource]
}



