import { css } from 'styled-components';

export const Dark = css`
    &.dark {
        background-color: #111;
        color: rgb(156, 156, 156);
        .chart {
            stroke: rgba(228, 228, 228, 0.219);
        }
        .table {
            background-color: #222;
            .tableCell {
                color: gray;
            }
        }
        .navbar {
            color: #999;
            border-color: #333;
            .search {
                border-color: gray;
                color: gray;
                input {
                    padding-left: 5px;
                }
            }
        }
        .sidebar {
            background-color: #111;
            border: #333;
            .top {
                border-color: #333;
                .logo {
                    color: #999;
                }
            }
            ul {
                li {
                    &:hover {
                        background-color: #333;
                    }
                    .icon {
                        color: #999;
                    }
                }
            }
        }
        .datatable {
            .datagrid {
                color: gray;
                border: none;
                .view,
                .delete {
                    color: gray;
                }
            }
        }
        input {
            background-color: transparent;
            color: lightgray;
        }
    }
`;
