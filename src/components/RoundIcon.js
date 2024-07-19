import React from 'react'
import classNames from 'classnames'

function RoundIcon({
  icon: Icon,
  iconColorClass = 'text-green-400 dark:text-green-50',
  bgColorClass = 'bg-green-50 dark:bg-green-500',
  className,
}) {
  const baseStyle = 'p-3 rounded-full'

  const cls = classNames(baseStyle, iconColorClass, bgColorClass, className)
  return (
    <div className={cls}>
      <Icon className="w-5 h-5" />
    </div>
  )
}

export default RoundIcon
