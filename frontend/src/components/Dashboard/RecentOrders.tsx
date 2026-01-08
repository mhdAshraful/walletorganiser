import type { Transaction } from "@/Types";
import {
	flexRender,
	getCoreRowModel,
	useReactTable,
	type ColumnDef,
} from "@tanstack/react-table";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { Card, CardContent, CardHeader } from "../ui/card";
type TransactionProps = {
	transactions?: Transaction[];
};

export const column: ColumnDef<Transaction>[] = [
	{
		accessorKey: "date",
		header: "Date",
		cell: ({ row }) => {
			const date = new Date(
				(row.original as any).createdAt ?? (row.original as any).date
			);
			const options: Intl.DateTimeFormatOptions = {
				year: "numeric",
				month: "short",
				day: "numeric",
			};
			return <div>{date.toLocaleDateString(undefined, options)}</div>;
		},
	},

	{
		accessorKey: "id",
		header: "Order ID",
	},

	{
		accessorKey: "totalAmount",
		header: "Total Amount",
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("totalAmount"));
			const currency = row.original.currency;
			return (
				<div className="font-medium">
					{currency} {amount.toFixed(2)}
				</div>
			);
		},
	},
	{
		accessorKey: "numberOfCards",
		header: "Cards Used",
		cell: ({ row }) => (
			<div className="text-center">{row.getValue("numberOfCards")}</div>
		),
	},
	{
		accessorKey: "currency",
		header: "Currency",
		cell: ({ row }) => <div className="">{row.getValue("currency")}</div>,
	},

	// {
	// 	accessorKey: "cardsUsed",
	// 	header: "Card Details",
	// 	cell: ({ row }) => {
	// 		const cards = row.original.cardsUsed;
	// 		return (
	// 			<div className="flex flex-col gap-1">
	// 				{cards.map((card, index) => (
	// 					<div key={index} className="text-sm">
	// 						{card.brand} •••• {card.lastFour} - {row.original.currency}{" "}
	// 						{card.amount.toFixed(2)}
	// 					</div>
	// 				))}
	// 			</div>
	// 		);
	// 	},
	// },
	// {
	// 	accessorKey: "category",
	// 	header: "Category",
	// 	cell: ({ row }) => (
	// 		<div className="capitalize">{row.getValue("category")}</div>
	// 	),
	// },
];

function RecentOrders(props: TransactionProps) {
	const table = useReactTable({
		data:
			props.transactions?.filter((trx) => {
				const date = new Date((trx as any).createdAt ?? (trx as any).date);
				if (Number.isNaN(date.getTime())) return false;
				const month = date.getMonth(); // 0 = Jan, 11 = Dec
				const year = date.getFullYear();
				return (
					(year === 2025 && month === 11) || (year === 2026 && month === 0)
				);
			}) || [],
		columns: column,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		// <div className="overflow-hidden rounded-3xl border ">
		<Card className="@container/card overflow-scroll rounded-3xl max-h-95 ">
			<CardHeader>
				<h2 className="text-lg font-semibold">Recent Orders</h2>
			</CardHeader>
			<CardContent className="p-0 m-0">
				<Table>
					<TableHeader className="bg-accent">
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows.map((row) => (
							<TableRow key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(
											cell.column.columnDef.cell,
											cell.getContext()
										)}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
		// </div>
	);
}

export default RecentOrders;
