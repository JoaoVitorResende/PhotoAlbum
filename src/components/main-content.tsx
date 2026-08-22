import cx from "classnames"

interface MaincontentProps extends React.ComponentProps<"main">{}

export default function MainContent({
    children,
    className,
    ...props
}: MaincontentProps){
    return (
        <main className={cx("mt-20 pb-20", className)} {...props}>
            {children}
        </main>
    )
}