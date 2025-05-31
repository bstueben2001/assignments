import Badge from "./Badge";

export default function BadgeList({badgeList}){
    // console.log("Badgelist received", badgeList)

    return(
        <div className="badgeList">
            {badgeList.map((badge, index) => (
                <Badge
                    key={index}
                    index={index}
                    {...badge}
                    // user={badge.user}
                    // desc={badge.desc}
                    // phone={badge.phone}
                    // badgeType={badge.badgeType}
                    // terms={badge.terms}
                    />
            ))}
        </div>
        
    )
}