import { useEffect } from 'react'
import { Link,  useNavigate, useParams } from 'react-router-dom'
import { courses } from '../data/courses'

const SingleCourse = () => {
    const params = useParams().slug
    const nav = useNavigate()
    const course = courses.find((course) => course.slug === params)
    useEffect(() => {
        if (!course) nav('..', { relative: 'path' })
    }, [course, nav])

    return (
        <div className="course">
            <Link to=".." relative="path">
                Back to all courses
            </Link>
            <h2>Single course {course?.slug}</h2>
            <h1>{course?.title}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                in!
            </p>
        </div>
    )
}

export default SingleCourse
