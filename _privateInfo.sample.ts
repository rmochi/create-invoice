import type {
	BillingItem,
	BillingCompany,
	BillingSourceBank,
	BillingSource,
} from "./types";

// 請求内容
export const billingItems: BillingItem[] = [
	{
		name: "プロジェクトA",
		quantity: 100,
		unitPrice: 1000,
	},
	{
		name: "プロジェクトB",
		quantity: 10,
		unitPrice: 100000,
	},
];

// 請求先会社情報
export const billingCompany: BillingCompany = {
	name: "株式会社さんぷる",
	address: "東京都千代田区さんぷる町1-2-3",
};

// 振込先銀行情報
export const billingSourceBank: BillingSourceBank = {
	bankName: "まるまる銀行",
	branchName: "ばつばつ支店",
	accountNumber: "9999999",
	accountHolder: "サンプルタロウ",
};

// 請求元情報
export const billingSource: BillingSource = {
	name: "サンプル太郎",
	address: ["〒xxx-xxxx", "東京都千代田区永田町１丁目１０−１"],
	phoneNumber: "xxx-xxxx-xxxx",
};
