import Link from 'next/link';
const PER_PAGE = 2;

const Pagination = ({ page, total }) => {
	const lastpage = Math.ceil(total / PER_PAGE);

	return (
		<div>
			{page > 1 && (
				<Link href={`/events?page=${page - 1}`}>
					<a className="btn-secondary">Prev</a>
				</Link>
			)}
			{page < lastpage && (
				<Link href={`/events?page=${page + 1}`}>
					<a className="btn-secondary">Next</a>
				</Link>
			)}
		</div>
	);
};

export default Pagination;
