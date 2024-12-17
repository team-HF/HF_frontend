export interface MatchingUserCard {
  id: number;
  profileImage: string;
  nickname: string;
  matchCount: number;
  location: string;
  hashtags: string[];
  time: string;
  status: 'ALL' | 'FINISHED' | 'IN_PROGRESS' | 'HALTED';
}
