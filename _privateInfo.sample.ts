// 請求内容
export const billingItems = [
	{
		name: "プロジェクトA",
		quantity: 100,
		unitPrice: 1000,
	},
	{
		name: "プロジェクトB",
		quantity: 10, // 作業時間
		unitPrice: 100000, // 単価
	},
] as const satisfies {
	name: string; // 請求内容
	quantity: number; // 作業時間
	unitPrice: number; // 単価（円）
}[];

// 請求先会社情報
export const billingCompany = {
	name: "株式会社さんぷる",
	address: "東京都千代田区さんぷる町1-2-3",
} as const satisfies {
	name: string; // 会社名
	address: string; // 会社住所
};

// 振込先銀行情報
export const billingSourceBank = {
	bankName: "まるまる銀行",
	branchName: "ばつばつ支店",
	accountNumber: "9999999",
	accountHolder: "サンプルタロウ",
} as const satisfies {
	bankName: string; // 銀行名
	branchName: string; // 支店名
	accountNumber: string; // 口座番号
	accountHolder: string; // 口座名義
};

// 請求元情報
export const billingSource: {
	name: string; // 氏名
	address: string | string[]; // 住所
	phoneNumber?: string; // 電話番号
	email?: string; // メールアドレス
} = {
	name: "サンプル太郎",
	address: ["〒xxx-xxxx", "東京都千代田区永田町１丁目１０−１"],
	phoneNumber: "xxx-xxxx-xxxx",
} as const;
