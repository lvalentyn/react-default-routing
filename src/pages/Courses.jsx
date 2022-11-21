import { Link, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { courses } from '../data/courses'
import { useEffect, useState } from 'react'

const SORT_KEYS = ['title', 'slug', 'id']

function sortCourses(courses, key) {
    const sortedCourses = [...courses]
    if (!key || !SORT_KEYS.includes(key)) {
        return sortedCourses
    }
    sortedCourses.sort((a,b) => a[key] > b[key] ? 1 : -1)
    return sortedCourses
}

const Courses = () => {
    const location = useLocation()
    const query = queryString.parse(location.search)
    const [sortKey, setSortKey] = useState(query.sort)
    const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey))
    const nav = useNavigate()

    useEffect(() => {
        if (!SORT_KEYS.includes(sortKey)) {
            nav('.')
            setSortKey()
            setSortedCourses([...courses])
        }
    }, [sortKey, nav])

    console.log(sortKey);
    
    return (
        <section className="courses">
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : `Courses list`}</h1>
            {sortedCourses.map(({ id, title, slug }) => (
                // <Link to={id.toString()} key={id} title={title}>
                <Link to={slug} key={id} title={title}>
                    {title}
                </Link>
            ))}
        </section>
    )
}

export default Courses
