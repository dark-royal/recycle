import styles from './index.module.css'
export const keys = [
    {
        id: 'reduce',
        title: 'Reduce',
        description:'A key part of waste "reduction" is\n' +
            '                      "conservation"—using natural resources\n' +
            '                      wisely, and using avoid waste.',

        className: styles.key,
        textClassName: styles.reduce,

    },
    {
        id: 'reuse',
        title: 'Reuse',
        description: `You can "reuse" materials in their original
                      form instead of throwing them away, or pass
                      those materials on to others who could use them too`,
        className: styles.key1,
        textClassName: styles.highlight,
    },
    {
        id: 'recycle',
        title: 'Recycle',
        description: `Your recycling mission is not impossible! In
                      fact, it is very simple: Don't throw away
                      anything that can be recycled!`,
        className: styles.key2,
        textClassName: styles.recycle,
    },
]