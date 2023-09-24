import React from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

type TableItem = {
	type: 'text' | 'badge'
	value: string
}

type TableRowData = {
	id: string
	image_url?: string
	actions?: any
	items: TableItem[]
}

type TableColumnData = {
	title: string
}

type Props = {
	actionButtons?: any
	crudActions?: any
	children?: any
	rows: TableRowData[]
	columns: TableColumnData[]
	selectable?: boolean
}

export default function CRUDTable({
	actionButtons,
	children,
	columns,
	rows,
	selectable,
	crudActions,
}: Props) {
	return (
		<div className="row">
			<div className="col-lg-12">
				<div className="card" id="leadsList">
					<div className="card-header border-0">
						<div className="row g-4 align-items-center">
							<div className="col-sm-3">
								<div className="search-box">
									<input
										type="text"
										className="form-control search"
										placeholder="Search for..."
									/>
									<HiMagnifyingGlass className="search-icon" />
								</div>
							</div>
							<div className="col-sm-auto ms-auto">
								<div className="hstack gap-2">{actionButtons}</div>
							</div>
						</div>
					</div>
					<div className="card-footer">
						<div className="table-responsive table-card">
							<table className="table align-middle" id="customerTable">
								<thead className="table-light">
									<tr>
										{selectable && (
											<th scope="col" style={{ width: '50px' }}>
												<div className="form-check">
													<input
														className="form-check-input"
														type="checkbox"
														id="checkAll"
														value="option"
													/>
												</div>
											</th>
										)}

										{columns.map((column, index) => {
											return (
												<th data-sort="name" key={`crud-table-colum-${index}`}>
													{column.title}
												</th>
											)
										})}
										{crudActions && <th data-sort="name">Actions</th>}
									</tr>
								</thead>
								<tbody className="list form-check-all">
									<tr />
									{rows.map((row, index) => {
										return (
											<tr key={`crud-table-row-${index}`}>
												{selectable && (
													<th scope="row">
														<div className="form-check">
															<input
																className="form-check-input"
																type="checkbox"
																name="chk_child"
																value="option1"
															/>
														</div>
													</th>
												)}

												{row.items.map((item, i) => {
													let { value, type } = item
													return (
														<td key={`table-row-item-${i}`}>
															<div className="d-flex align-items-center">
																{row.image_url && i === 0 ? (
																	<div className="flex-shrink-0">
																		<img
																			src={row.image_url}
																			alt={'preview'}
																			width={100}
																			className="avatar-xxs rounded-circle image_src object-fit-cover"
																		/>
																	</div>
																) : null}
																{type === 'text' && (
																	<span className="flex-grow-1 ms-2 name">
																		{value}
																	</span>
																)}
																{type === 'badge' && (
																	<span className="badge bg-primary-subtle text-primary me-1">
																		{value}
																	</span>
																)}
															</div>
														</td>
													)
												})}
												{crudActions && <td>{crudActions}</td>}
											</tr>
										)
									})}
								</tbody>
							</table>
							{children}
						</div>
						<div className="d-flex justify-content-end mt-3">
							<div className="pagination-wrap hstack gap-2 d-flex">
								<a className="page-item pagination-prev disabled" href="#">
									Previous
								</a>
								<ul className="pagination listjs-pagination mb-0">
									<li className="active">
										<a className="page" href="#" data-i="1" data-page="8">
											1
										</a>
									</li>
									<li>
										<a className="page" href="#" data-i="2" data-page="8">
											2
										</a>
									</li>
								</ul>
								<a className="page-item pagination-next" href="#">
									Next
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
