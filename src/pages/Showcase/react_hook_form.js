import { useForm } from 'react-hook-form'

export default function react_hook_form() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")}/>
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <input type="submit" />
        </form>
    )


}