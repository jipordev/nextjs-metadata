'use client'

import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { UserType } from '@/types/user'
import LoadingComponent from '@/app/loading'
import { Button, Input } from "@nextui-org/react";


const columns: TableColumn<UserType>[] = [
    {
      name: 'ID',
      selector: row => row.id
    },
    {
      name: 'Username',
      selector: row => row.username
    },
    {
      name: 'Email',
      selector: row => row.email
    },
    {
      name: 'Image',
      selector: row => (
        <img src={row.image} className='w-[90px] h-[90px]'/>
      ),
    },
    {
      name: "Action",
      cell: (row) => (<Button color="danger" size="sm">Delete</Button>)
    }
  ]
  const endPoint = 'https://dummyjson.com/users'
  const UserTable = () => {
    const [getUser, setUser] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [filteredData, setFilter] = useState([])

    useEffect(() => {
      async function fetchData() {
        const data = await fetch(endPoint);
        const res = await data.json();
        setUser(res.users);
        setFilter(res.users)
        setLoading(false);
      }
      fetchData()
    },[])
    useEffect(() => {
      if (!search) {
        setFilter(getUser)
        return;
      }

      const result = getUser.filter((item) => {
        return item.username.toLowerCase().includes(search.toLocaleLowerCase())
      })
      setFilter(result)

    }, [getUser,search])

    const paginationComponentOptions = {
      rowsPerPageText: 'ជួរដេកក្នុងមួយទំព័រ',
      rangeSeparatorText: 'នៃ',
      selectAllRowsItem: true,
      selectAllRowsItemText: 'ទាំងអស់',
    };
    const customStyles = {
      rows: {
        style: {
          minHeight: '72px', // override the row height
          minWidth: '1000px'
        },
      },
      headCells: {
        style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
        },
      },
      cells: {
        style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
        },
      },
    };

    return (
      <div>
  
          <DataTable 
          progressPending={isLoading}
          columns={columns}
          fixedHeader={true}
          fixedHeaderScrollHeight="600px"
          selectableRows
          pagination
          subHeader
          subHeaderComponent={
            <Input
              radius="lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type to search..."
            />
          }
          paginationComponentOptions={paginationComponentOptions}
          data={filteredData}
          progressComponent={<LoadingComponent/>}
          actions={<Button color="primary">Export PDF</Button>}
          customStyles={customStyles}
          />
  
      </div>
    )
  }
  export default UserTable
  
